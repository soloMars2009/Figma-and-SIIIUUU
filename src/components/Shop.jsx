import React from "react";
import Q1 from '../images/3.png'
import Q2 from '../images/2.png'
import Q3 from '../images/1.png'
import F1 from '../images/Ba.png'
    

export default function Shop() {
    return (
        <>

            <div className="container pt-5">

                <h2 className="text-center TextColor">Наши продукты направлены на вашу безопасность. </h2>
                <p className="text-center TextColor">Мы придерживаемся в своей работе простого принципа: <br /> детектировать и блокировать любую вредоносную атаку.</p>

                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="card StylCard">
                            <img src={Q1} className="card-img-top w-50 o" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> Анонимность</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="card StylCard">
                            <img src={Q2} className="card-img-top w-50 o" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Проверка на наличие угроз</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="card StylCard">
                            <img src={Q3} className="card-img-top w-50 o" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Обнаружение и предотвращение аттак</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/*  */}





            <h2 className="text-center TextColor pt-5 pb-5">Вы можете связаться с нами <br /> удобным для Вас способом</h2>

            <div className="divColor mb-5 pb-5 pt-2">
                <div className="row">
                    <div style={{paddingLeft: '50px'}} className="col-lg-6 col-sm-12 ">
                        <input className="InputScc" type="text" placeholder="Как к Вам обращаться?" />
                        <input className="InputScc" type="text" placeholder="Какую компанию Вы представляете?" />
                        <input className="InputScc" type="text" placeholder="Адрес электронной почты" />
                        <textarea className="form-control InputScc"id="exampleFormControlTextarea1" placeholder="Введите ваше сообщение" rows="3"></textarea>
                        <button className="w-100 mt-3" style={{background: "#0FAE96", border: 'none' }} >Отправить данные</button>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <p className="TextColor">Ленинградский пр-т., 27, к2</p>
                        <p className="TextColor">+7 (495) 000 - 00 - 00</p>
                        <p className="TextColor">admin@trustcrypt.com</p>
                        <img className="w-50" src={F1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}