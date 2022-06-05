import "./movieDetailPage.css";

const MovieDetailPage = () => {
  return (
    <div className='detail_container'>
      <div className='detail_left'>
        <img
          src='https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg'
          alt=''
          className='detail_left_img'
        />
      </div>
      <div className='detail_right'>
        <h4 className='detail_right_title'>The Batman</h4>
        <p className='detail_right_para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          mollitia doloremque obcaecati cupiditate ab eveniet distinctio vero
          eius fuga laborum? Ullam debitis voluptates blanditiis unde id est
          ipsam tempora accusamus. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Repellendus vitae facere illum earum deserunt
          exercitationem est dolore nostrum ducimus! Unde nam ipsum dolorum ab
          tempore, facilis velit magnam incidunt error! Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Adipisci dolorum repellat, soluta
          possimus assumenda fugiat molestiae consequuntur, eligendi sapiente
          molestias vel necessitatibus deleniti officia exercitationem dolore
          rem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          itaque! Explicabo voluptatem nemo sed. Voluptas magnam tenetur quasi
          cumque eum corporis reprehenderit natus? Sed recusandae temporibus
          voluptatibus, nemo commodi mollitia. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Qui vel quasi totam rem nihil
          cupiditate dignissimos fugiat iste natus laboriosam voluptatibus amet,
          fugit sint temporibus voluptatum magni non modi quisquam! Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Quod deleniti similique
          repellat aliquid facere molestias, quos explicabo fugiat beatae ipsum
          error ducimus eveniet sunt porro laboriosam ipsa minima ullam ad.
        </p>
        <div className='detail_right_types'>
          <div className='detail_right_type'>Action</div>
          <div className='detail_right_type'>Crime</div>
        </div>
        <button className='detail_right_btn'>Add to Favourite</button>
      </div>
    </div>
  );
};

export default MovieDetailPage;
