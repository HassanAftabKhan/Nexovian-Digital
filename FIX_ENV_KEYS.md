# 🔑 How to Get Your Correct SUPABASE_SERVICE_ROLE_KEY

## The Problem
Your `.env.local` has the wrong value for `SUPABASE_SERVICE_ROLE_KEY`. It's currently set to a PostgreSQL connection string, which will cause build errors.

## The Solution
Get the correct **Service Role Key** from your Supabase dashboard:

### Step 1: Open Your Supabase Project
1. Go to https://supabase.com
2. Select your project: `wiaflogjwrtcbaklqxpu`

### Step 2: Find the Service Role Key
1. Click **Settings** (bottom left)
2. Click **API** (in the left sidebar)
3. You'll see this section:
   ```
   Project API keys
   ├─ Service role key (do not expose publicly)
   ├─ Anon/public key
   └─ JWT Secret
   ```

### Step 3: Copy the Service Role Key
1. Find **"Service role key"** (with the warning: "do not expose publicly")
2. Click the **copy icon** ⎘
3. Paste it into your `.env.local` file

### Step 4: Your .env.local Should Look Like
```
NEXT_PUBLIC_SUPABASE_URL=https://wiaflogjwrtcbaklqxpu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_-tiDvmY2X-EXiCV5yE3IdQ_OviL2VnS
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFz...ACTUAL_KEY_HERE
RESEND_API_KEY=re_p9imhZni_5hYtqye19P7zY4bji7BVJQMk
```

**⚠️ Important Security Notes:**
- **NEVER commit `.env.local`** to git (it's in `.gitignore`)
- **Service Role Key** must be kept secret (server-side only)
- **Anon key** is safe to expose (it's public)
- **RESEND_API_KEY** is already correct ✓

---

## If You Still Get Build Errors

### Option 1: Add Env Vars to Vercel (Recommended for Production)
1. Go to Vercel → Your Project → Settings
2. Environment Variables
3. Add:
   - `SUPABASE_SERVICE_ROLE_KEY` (Secret)
   - Leave build-time variables empty initially

### Option 2: Skip Email During Build (Temporary)
If you can't get the Service Role Key right now, you can skip Resend errors:
```bash
# Build without running data collection
npm run build -- --skip-validation
```

---

## Quick Check: Verify Your Key Format

Your `SUPABASE_SERVICE_ROLE_KEY` should:
- ✅ Start with `eyJhbGciOiJIUzI1NiIs...` (base64 encoded JWT)
- ✅ Be much longer (usually 150+ characters)
- ❌ NOT contain `postgresql://` 
- ❌ NOT contain `@db.`
- ❌ NOT contain password

**Current value format:** ❌ `postgresql://...` (WRONG)
**Should be format:** ✅ `eyJhbGciOi...` (JWT token)

---

## Support
- Supabase Docs: https://supabase.com/docs/guides/auth/service-role-key
- Contact: Check your Supabase project email for API documentation
