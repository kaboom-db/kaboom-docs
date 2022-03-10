---
sidebar_position: 7
---

# Extra Information

## String Options

Some query parameters/record fields have a list of options that can be used. Some of these option lists are string sensitive, if so they will be marked with [SEN].

<details>
    <summary><b>Status Options</b> [SEN]</summary>

The status fields on cartoons and comics are limited to these values:
- COMPLETED
- RELEASING
- PLANNED
- CANCELLED

</details>

<details>
    <summary><b>Image Request Field Options</b> [SEN]</summary>

This refers to the type of image is uploaded to `accounts/upload/`:
- COVER
- BACKGROUND
- GENERIC
- LOGO
- SCREENSHOT

</details>

<details>
    <summary><b>Image Request Options</b> [SEN]</summary>

Image uploads are limited to only publishers, staff, comics, issues, actors, networks, characters, cartoons, episodes and teams. However, they must be passed using these values:
- comics_Publisher
- comics_Staff
- comics_Comic
- comics_Issue
- cartoons_VoiceActor
- cartoons_Network
- cartoons_Character
- cartoons_Cartoon
- cartoons_Episode
- cartoons_Team

</details>

<details>
    <summary><b>Report Options</b> [SEN]</summary>

Reports can be made on these models:
- comics_Publisher
- comics_Staff
- comics_Comic
- comics_Issue
- cartoons_VoiceActor
- cartoons_Network
- cartoons_Character
- cartoons_Cartoon
- cartoons_Episode
- cartoons_Team
- users_Thought
- users_Comment
- auth_User

</details>

<details>
    <summary><b>Character Status Options</b> [SEN]</summary>

Character statuses are limited to:
- UNKNOWN
- ALIVE
- DECEASED

</details>

<details>
    <summary><b>Character Alignment Options</b> [SEN]</summary>

A characters alignment is limited to:
- ANTI-HERO
- GOOD
- EVIL

</details>