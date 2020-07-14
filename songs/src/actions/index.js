// action creator 
export const selectSong = song =>  {
    //return creator
    return {
        type: 'SONG_SELECTED',
        payload: song 
    };
};