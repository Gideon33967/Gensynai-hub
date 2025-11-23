module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

4. Click **"Commit new file"**

---

### **FILE 5: .gitignore**

1. Click **"Add file"** → **"Create new file"**
2. **Filename:** `.gitignore`
3. **Paste this:**
```
node_modules
.next
out
.DS_Store
*.log
.env*.local
.vercel
