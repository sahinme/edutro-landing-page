import React, { Component, Fragment } from "react";

export class ContentStory extends Component {
  render() {
    return (
      <Fragment>
        <div className="atbd_content_module atbd_listing_details">
          <div className="atbd_content_module__tittle_area">
            <div className="atbd_area_title">
              <h4>
                <span className="la la-file-text-o"></span>Açıklama
              </h4>
            </div>
          </div>
          <div className="atbdb_content_module_contents">
            <p>
              Yaşam Koçluğu yapmak için kişisel gelişimin temeli ve tavanı olan
              NLP yani Sinir Dili Programlama sistemini bilmeniz gerekir ve bu
              eğitim NLP ile başlar. Koçluk yapmaya başladığınız zaman illaki
              sizden Öğrenci Koçluğu talep edilecektir. Öğrenci Koçluğuyla
              beraber aile ile kontak kurmanız gerekecektir. Burada da Aile
              Koçluğu devreye girecektir. Tüm koçluk çalışmalarınızı NLP
              teknikleri ile destekleyerek fark yaratabilirsiniz
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}
