# Thus Rises New Dawn: Clanwar Server v2.5 Unleashed

May 22th, 2025

> *"Lo, gather ye now and lend thy gaze,  
> Upon this craft, forged not in idle days.  
> With code as quill and will as fire,  
> I’ve wrought a server to inspire."*

Thus begins my humble chronicle — a dev’s tale of pixels, packets, and persistence.  
Join me as I unveil the makings of **New Dawn Clanwar Server 2.5**: rebuilt, refined, and reborn.

---

## ✅ Clanwar Login System — Fully Modernized

---

### 🔒 Login System Redesign

A brand-new textdraw-based login interface replaces old dialogs:

- Interactive password input  
- PlayerTextDraw-based confirmation buttons  
- Clean immersive layout  

---

### 📸 Cinematic Login Experience

- Rewritten `LoginCameraScreen()` with animated camera transitions  
- Randomized scene paths for variation  
- Continuous animation handled by `SetTimerEx`  

---

### 🔑 Secure Password Handling

- Passwords are hashed via HTTP using `hash.php` (SHA512)  
- Used `OnHashUpdate()` and `HashUpdateQuery()` for verification  
- Fully compatible with the latest MySQL plugin (BlueG fork)  

---

### 🧠 Account Data Handling

- New `LoadAccountStats()` replaces legacy `LoadStats`  
- Efficient stat loading using `cache_get_value_name[_int]()`  
- Player data modularized inside `PlayerInfo[]` structure  

---

### 📊 Stat Preview Before Login

- Added pre-login stat box showing:  
  - Score  
  - DM Wins  
  - Hunters  
  - DD Wins  
- Powered by `OnAccountPreviewStats()`  

---

### 🛠️ Quality of Life Enhancements

- CW Hosts now show up in chat like:  
  `[CW_Host] PlayerName (ID): Message`  
- Server-wide chat messages improved with `SendFormatMessageToAll()`  
- Added `/changecwstate` for cycling through Clanwar states manually  

---

## 🧼 Codebase Cleanup & Structure

- Login camera logic, hashing, UI, and stat updates now live in their own `.inc` files:  
  - `account_system.inc`  
  - `hud.inc`  
  - `utility.inc`  
  - `textdraws.inc`  
- Player data and enums organized in `data.inc`  
- Clean separation between camera, MySQL, UI, and gameplay systems  

---

## 📸 Screenshots

### 🔐 Login System

![Login Error](../assets/post1/loginerror.png)
![Login Screen](../assets/post1/login.png)  
![Login Dialog](../assets/post1/logindialog.png)  
![Missing Input](../assets/post1/loginnoinput.png)  
![Missing Password](../assets/post1/loginnopassword.png)  

---

### ⚔️ Clanwar Setup

![No Clanwar](../assets/post1/nocw.png)  
![Setup Clanwar](../assets/post1/setupcw.png)
