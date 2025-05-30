# OpenMP Migration & Deathlist Madness

May 29th, 2025

> *“Thou shall not pass unless your code compiles.”*  
> — William Debugspeare, moments before the OpenMP migration

---

## 🛠️ Devblog: May 29th – *OpenMP, Deathlist & DebugHell*

Today’s entry is a spicy cocktail of **DeathList redesign**, **OpenMP migration**, and a bucketload of **compiler tantrums**. What began as a simple update turned into a holy crusade against untagged variables, deprecated functions, and the eternal battle of `0` vs. `false`.

---

### 💀 Deathlist TextDraw System – *Now Longer, Stronger, and Ranked in Style*

- Fully reworked with `CreateDeathListTD()`.
- Each kill now shifts the list downward via `PushDeathListEntry(playerid, tick)`.
- **Top 3** entries are color-highlighted (for that sweet, glorious shame).
- Built-in ordinal formatting (1st, 2nd, 3rd, etc.) so even in death, you're properly labeled.
- Handles eliminations with `HandlePlayerElimination(playerid)` and closes rounds with `HandleRoundWinner(type)`.

> Everyone dies. But not everyone makes the list.

---

### 🧠 Clanwar Scoreboard Logic – *Smart, Reactive, and Sassier*

- We now dynamically update the HUD based on `CWInfo[MapRoundsLeft]`.
- Status strings include:
  - <span style="color:#9C1619;">No map selected. Please wait.</span>
  - <span style="color:#C4A656;">Selecting next map...</span>
  - <span style="color:#FFFFFF;">Rounds left: <span style="color:#C4A656;">X</span></span>
- Seamless round-to-round transitions. Cleaner than ever.

---

### ⏱️ New Map Timer – *Finally, a Clock!*

- Introduced a **map-specific timer** to Clanwars.
- Tracks overall match duration and per-round timings.

> We finally have a timer. Took us only 10 years. Now you know how long you’ve been stuck on that one map. Worth it.

---

### 🔁 Map Search Overhaul – *Tablist + Filtering*

- Implemented `DIALOG_STYLE_TABLIST_HEADERS` with author, mode, and mapname columns.
- Searches `.ini` files from `/RMaps/` dynamically.
- Added full **Search Map** support with partial name matching.

---

### 🔥 OpenMP Migration – *Welcome to the Shittery*

Oh boy. Where do we begin?

We switched the engine from SA-MP to OpenMP and **all hell broke loose**:

- `if(0)`? Now must be `if(false)`.
- `TextDrawColor`? Replaced with `TextDrawColour`. British server confirmed.
- `TogglePlayerControllable(playerid, 1);` → **tag mismatch**  
  Use `true`. Apparently, 1.0 is too ambiguous for this brave new world.

---

### 🤕 The Migration Warnings That Haunted Us

- warning 213: tag mismatch  
- warning 234: function is deprecated (GetPlayerPoolSize)  
- error 025: function heading differs from prototype  
  *"Bro, you forgot the enum tag on 'reason' again..."*

We slapped on every fix possible:

`#define NO_TAGS` 
`#define MIXED_SPELLINGS`  
`#include <open.mp>`  
`#pragma warning disable 213`  

---

### 🧪 Runtime Errors & Logs of Doom

> "Status 406 — socket read timed out"  
> [Info] This won’t affect server behavior.

Well, thank god because after that refactor, we were *this* close to switching careers.

Also:

- `GetPlayerPoolSize()` → `MAX_PLAYERS`
- `GetVehiclePoolSize()` → `MAX_VEHICLES`

---

### 🧼 The Cleaners: *Reset & Round Control*

- `ResetDeathList()` wipes the board between rounds.
- `HandlePlayerElimination()` manages active deaths.
- `HandleRoundWinner(type)` finalizes the round based on alive counts.

The round system is now smarter, cleaner, and battle-tested.

---

### 🌟 Achievement System Preview – *Sneak Peek from the CW Server*

We also previewed an early concept for the **new Achievement System**, planned for the main server.

- Tested a working prototype on the CW server.
- Features dynamic TextDraws for titles, rewards, and notifications.
- Integrated sound feedback

It’s still early — but already spicy. Expect more soon.

---

## 📸 Screenshots

![Achievement](../assets/post5/achievement.png)
![Deathlist](../assets/post5/deathlist.png)
![Maplist](../assets/post5/maplist.png)
![Maptimer](../assets/post5/maptimer.png)

---

> *“Tag your enums, sanitize your inputs, and may your returns never be void.”*  
> — Debugspeare

Catch you next push.  
— Jonny
