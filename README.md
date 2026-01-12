mkdir db_example

cd db_example

npm create vite@latest

cd frontend

npm i react-router-dom

src/</br>
  models/</br>
    musicModel.js</br>
  controllers/</br>
    musicController.js</br>
  views/</br>
    MusicView.jsx</br>
  pages/</br>
    MusicPage.jsx</br>
  lib/</br>
    supabaseClient.js</br>


GIT:

git remote add origin https://github.com/aaron1986/MCV-Red-Hot-Chili-Peppers.git

git branch -M main

git add .

git commit -m "first commit"

git push origin main


SQL
CREATE TABLE music ( </br>
    id SERIAL PRIMARY KEY,</br>
    title TEXT NOT NULL,</br>
    cover_img TEXT,</br>
    year_released INTEGER,</br>
    release_type TEXT NOT NULL CHECK (</br>
        release_type IN ('studio_album', 'bootleg', 'single')</br>
    )</br>
);


CREATE TABLE studio_albums (</br>
    music_id INT PRIMARY KEY REFERENCES music(id),</br>
    album_genre TEXT</br>
);

CREATE TABLE bootlegs (</br>
    music_id INT PRIMARY KEY REFERENCES music(id),</br>
    recording_location TEXT,</br>
    quality TEXT</br>
);

CREATE TABLE singles (</br>
    music_id INT PRIMARY KEY REFERENCES music(id),</br>
    billboard_hot_100_position INTEGER</br>
);


