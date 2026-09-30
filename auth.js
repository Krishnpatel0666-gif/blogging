function setError(id,msg){const el=document.getElementById(id);if(el)el.textContent=msg}
function clearErrors(ids){ids.forEach(id=>setError(id,""))}
function setupPasswordToggle(buttonId,inputId){document.getElementById(buttonId)?.addEventListener("click",()=>{const i=document.getElementById(inputId);i.type=i.type==="password"?"text":"password";document.getElementById(buttonId).textContent=i.type==="password"?"Show":"Hide"})}
document.addEventListener("DOMContentLoaded",()=>{
  setupPasswordToggle("showLoginPassword","loginPassword"); setupPasswordToggle("showSignupPassword","signupPassword");
  document.getElementById("loginForm")?.addEventListener("submit",e=>{
    e.preventDefault(); clearErrors(["emailError","passwordError"]);
    const email=document.getElementById("loginEmail").value.trim(), pass=document.getElementById("loginPassword").value, msg=document.getElementById("loginMessage");
    let ok=true;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setError("emailError","Enter a valid email address.");ok=false}
    if(pass.length<6){setError("passwordError","Password must be at least 6 characters.");ok=false}
    if(ok){localStorage.setItem("lvLoggedIn","true");localStorage.setItem("lvUser",email);msg.textContent="Login successful! Redirecting...";msg.style.color="#16a06a";setTimeout(()=>location.href="index.html",700)}
  });
  document.getElementById("signupForm")?.addEventListener("submit",e=>{
    e.preventDefault(); clearErrors(["nameError","signupEmailError","signupPasswordError","confirmError"]);
    const name=document.getElementById("signupName").value.trim(),email=document.getElementById("signupEmail").value.trim(),pass=document.getElementById("signupPassword").value,confirm=document.getElementById("confirmPassword").value,msg=document.getElementById("signupMessage");
    let ok=true;
    if(name.length<2){setError("nameError","Please enter your name.");ok=false}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setError("signupEmailError","Enter a valid email address.");ok=false}
    if(pass.length<6){setError("signupPasswordError","Password must be at least 6 characters.");ok=false}
    if(pass!==confirm){setError("confirmError","Passwords do not match.");ok=false}
    if(ok){localStorage.setItem("lvUserName",name);localStorage.setItem("lvUser",email);localStorage.setItem("lvLoggedIn","true");msg.textContent="Account created successfully!";msg.style.color="#16a06a";setTimeout(()=>location.href="index.html",800)}
  });
});
