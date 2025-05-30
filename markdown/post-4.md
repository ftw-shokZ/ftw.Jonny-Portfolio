# 🛠️ Clanwar System (Core + UI Overhaul)

May 25th, 2025

> *“O, code foul and riddled with ‘shit’, thy time hath come.  
> Let logic reign where chaos once danced.”*  
> — William Debugspeare

---

## 🛠️ New Dawn Modernization Recap: May 25th Edition

Today we sliced, diced, and refactored the **New Dawn Clanwar system** with surgical precision — and a flamethrower. What began as a simple cleanup turned into a full-blown exorcism of `DisableShit()` and friends. Let’s get into it:

---

### ⚙️ Total Rewrite. Cleaner. Meaner. Shit-free 💩.
We looked into the abyss of the old codebase... and the abyss looked back at us with functions named `DisableShit()`, variables like `return shit;`, and logic that screamed **"please refactor me."**
So, we did what had to be done.

The original code was powered by prayers and duct tape.  
- `DisableShit()` 🤨 vanished.
- `return shit;` flushed.
- `shit++;` replaced by ?.

We proudly present: **New Dawn v2.5 – 100% SHIT-FREE™** 🧻 
Certified by 3AM coders and rubber duck debuggers worldwide.

---

### ✅ Refactor Blitz – Now With 80% More Enum

- `/startmap` and `/stopmap` now respect `CWInfo[RoundStatus]` — not chaos.
- The old `Map` variable? Retired. Replaced with real enums that mean something.
- Full rewrites for `CheckDrivers`, `CarCheck`, and `SpawnPlayers`, all using `foreach` and `STATE_*`.

RIP `Map = 1`, you won’t be missed.

---

### 🧠 Smarter Logic (Now With Water Death Support™)

- Players who drowned now **actually die** (and get listed, sorry Kevin).
- TrainMode and EvenMode moved into `CWInfo[]` – no more rogue globals.
- Round ending logic cleaned up with fewer edge cases than a broken jigsaw puzzle.
- `UpdateAliveCounts()` now shows `--` only when it makes sense.

---

### ⏱️ Countdown Logic 2.0 – RIP `StartCountDown3, 2, GO`

- Full revamp with `StartCountDown()` and `CountdownTick()` → clear, readable, actually works.
- HUD updates in sync. Sounds fire off at the right moment.
- Players get unlocked like it's Payday.

Old countdown logic?  
Let's just say it went to `DisableShit()` heaven.

---

### 🎨 UI, HUD & Message Cleanup

We color-coded everything like it’s a visual novel:
- `[INFO]` = Calm.
- `[SETTING]` = Fresh.
- `[DEBUG]` = Mysterious.
- `[CLANWAR]` = Boss-mode.
- `[WARNING]` = “You sure about that?”
- `[FIX]` = Ahhh yes, the duct tape color.

Late join now has its own toggle via `/togjoin` (admin-approved).
Team joining is smarter, with protection against mid-match chaos.  
And if you see a message like:  
> *(mooman): “Strawberries!”*  
…just smile. The random spawn quotes are live. 👀

---

### 🧱 System Split: maploader vs clanwar

We drew the line in the sand:

- `maploader.inc` – handles everything world-related:
  - Vehicle spawn
  - Pickup management
  - Weather, water, spawnmode, etc.
- `clanwar.inc` – controls the warzone:
  - Round state
  - Alive counters
  - Scoreboard logic
  - Spectator stuff

Clean structure. No more 2-in-1 potluck includes.

---

### 🧯 Bugfixes & Features

- `/fixspawn` – if you’re under the map, this is your lifeline.
- Water deaths now correctly count as “yeah he’s gone.”
- `SendToSpectate()` refined to work under all live-round conditions.
- Team selection now appears for players joining **during** CW — but **only if** they aren’t assigned.
- `AllowLateJoin` logic wired in — toggle it on/off depending on how generous you're feeling.

---

## ☑️ What’s Next?

- A full scoreboard rewrite.
- Stats saving and match logs.
- Kill the last remaining signs of `ShitLegacy()` and remove any lingering `ReturnTrash()`.

---

## 📸 Screenshots

### 🗺️ Status, Spectator and Alive Counter

![Status](../assets/post4/status.png)

---

> *“Refactor softly and carry a big semicolon.”*

Catch you in the next push.  
— Jonny

---
