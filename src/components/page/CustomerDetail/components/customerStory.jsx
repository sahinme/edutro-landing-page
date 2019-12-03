import React, { Component, Fragment } from "react";

const values = {
  about1:
    "-ATLANTİS  Eğitim ve Terapide danışmanlığa ihtiyacı olan birey ve kurumlara, derin bilgi ve deneyimlerini ülkemiz şartlarına uyarlamada becerikli, başarma tutkulu danışmanlarıyla, yaratıcı çözümler  sunmakta olan öncü bir kurumdur.",
  about2:
    "Bütün bunların yanı sıra Akademisyen Eğitmen Kadrosuyla  bir çok Kurum ve Kuruluşta Hizmet içi Eğitimler,Ajans Proje Eğitimleri,Personel gelişim ve İş Motivasyon Eğitimleri,Sosyal Sorumluluk Projeleri,Dez avantajlı Grupların Sosyal Projeleri gibi bir çok eğitimler  gerçekleştirmektedir."
};

class CustomerStory extends Component {
  render() {
    const { about1, about2 } = values;
    const { story } = this.props;
    return (
      <Fragment>
        <div className="atbd_author_module">
          <div className="atbd_content_module">
            <div className="atbd_content_module__tittle_area">
              <div className="atbd_area_title">
                <h4>
                  <span className="la la-user"></span>Hakkında
                </h4>
              </div>
            </div>
            <div className="atbdb_content_module_contents">
              <p>{story}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CustomerStory;
