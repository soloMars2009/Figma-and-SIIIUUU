import React from "react";
import AVA from '../images/u.png'
import AVA1 from '../images/un.png'
import Q1 from '../images/m.png'






export default function Card() {
    return (
        <>
            <div className="container pt-5 mb-5">
                <div className="row ">
                    <div className="col-lg-6 col-sm-12">
                        <div className="card CardColor">
                            <div className="card-body">
                                <h5 style={{ fontSize: '40px' }} className="card-title">Кибербезопасность нового поколения</h5>
                                <p style={{ fontSize: '20px' }} className="card-text mt-5">Масштабируемая защита от самых сложных киберугроз, учитывающая потребности вашего бизнеса. </p>
                                <button className="BottonColor">Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="card">
                            <img src={AVA} className="card-img-top w-100" alt="..." />
                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row pt-5">
                    <div className="col-lg-6 col-sm-12">
                        <div className="card">
                            <img src={AVA1} className="card-img-top w-100" alt="..." />
                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="card CardColor">
                            <div className="card-body">
                                <h5 style={{ fontSize: '40px' }} className="card-title">Передовая кибербезопасность для любой компании </h5>
                                <p style={{ fontSize: '20px' }} className="card-text mt-5">Защитите ваш бизнес от всех видов киберугроз с помощью решений мирового класса. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/*  Инструменты */}
            <div className="container">

            <h4 className="text-center pt-5 TextColor">Инструменты</h4>
            <p className="text-center pt-3 TextColor">Тестирование на проникновение позволяет ответить на вопрос, <br /> как кто-то со злым умыслом может вмешаться в вашу сеть.</p>



            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img className="100" src={Q1} alt="" />
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img className="100" src={Q1} alt="" />
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img className="100" src={Q1} alt="" />
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img className="100" src={Q1} alt="" />
                </div>

            </div>


            </div>
        </>
    )
}