export default function MusicView({ music, error }) {
  if (error) return <p>{error}</p>;

  return (
    <div className="albums_page">
      <h1>Red Hot Chili Peppers</h1>

      <div className="img-container">
        {music.map(item => (
          <div className="album_page" key={item.id}>
            <h2 className="xxx">{item.title}</h2>

            {item.cover_img && (
              <img
                src={item.cover_img}
                alt={item.title}
                className="card_image"
              />
            )}

            <p>Release type: {item.release_type.replace("_", " ")}</p>
            <p>Released in {item.year_released}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
