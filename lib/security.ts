import { NextRequest } from 'next/server'

type Bucket={count:number;resetAt:number}
const buckets=new Map<string,Bucket>()

export function clientIp(request:Request){
  const forwarded=request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return forwarded||request.headers.get('x-real-ip')||'unknown'
}

export function rateLimit(key:string,limit:number,windowMs:number){
  const now=Date.now()
  const existing=buckets.get(key)
  if(!existing||existing.resetAt<=now){
    buckets.set(key,{count:1,resetAt:now+windowMs})
    return {ok:true,remaining:limit-1,retryAfter:0}
  }
  existing.count+=1
  buckets.set(key,existing)
  const ok=existing.count<=limit
  return {ok,remaining:Math.max(0,limit-existing.count),retryAfter:Math.max(1,Math.ceil((existing.resetAt-now)/1000))}
}

export function sameOrigin(request:NextRequest|Request){
  const origin=request.headers.get('origin')
  if(!origin)return true
  try{
    const host=request.headers.get('x-forwarded-host')||request.headers.get('host')
    const protocol=request.headers.get('x-forwarded-proto')||'https'
    if(!host)return false
    return new URL(origin).origin===`${protocol}://${host}`
  }catch{return false}
}

export function hasAllowedJsonSize(request:Request,maxBytes=16_384){
  const length=Number(request.headers.get('content-length')||0)
  return !Number.isFinite(length)||length<=0||length<=maxBytes
}

export function safeText(value:unknown,max=500){
  return String(value??'').replace(/[\u0000-\u001F\u007F]/g,' ').trim().slice(0,max)
}

export function isValidHttpUrl(value:string){
  if(!value)return true
  try{const u=new URL(value);return u.protocol==='http:'||u.protocol==='https:'}catch{return false}
}
