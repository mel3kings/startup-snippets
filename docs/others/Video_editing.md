# Video editing 
- quickly edit bulk amounts of video with python for content creators and streamers
- prerequisite: understanding of python, pip


## How
install movie py
`pip install moviepy`
 
this should install ffmpeg if not
`pip install ffmpeg-python`


## Code
```python
# Import everything needed to edit video clips
from moviepy.editor import *

# loading video dsa gfg intro video
raw = VideoFileClip("127021.mp4")


# List of game start and end times
game_times = [((11,30),(43,00)),((45,00),(1,17,30)),((1,20,25),(2,10,55))]

for i, (game_start, game_end) in enumerate(game_times):
    # getting only first 5 seconds
    intro_start = (9, 30)
    intro_end = (10, 00)
    intro_clip = raw.subclip(intro_start, intro_end)

    # cutting out the game part from the clip
    game_clip = raw.subclip(game_start, game_end)

    # Concatenating intro and game clips
    final_clip = concatenate_videoclips([intro_clip, game_clip])

    # Writing the new video file for each game
    final_clip.write_videofile(f"game{i+1}.mp4",audio_codec='aac', threads = 8, fps=30)
    intro_clip.close()
    game_clip.close()
    final_clip.close()
```