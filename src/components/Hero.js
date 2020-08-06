import * as React from 'react';
import JetCake from './index';
import { Link } from 'react-router-dom';

export default function Hero(props){
    return <JetCake.Fold>

                <JetCake.Overlay>
                    <JetCake.H1>
                        HotCake. Free cupcakes till 11:45
                    </JetCake.H1>
                    <JetCake.p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
                    </JetCake.p>
                    <Link to='/profile' className={'isBtn'}>Oh cool</Link>
                </JetCake.Overlay>
                <img src="/cakes.jpg" alt="" className={'hero_image'}/>
            </JetCake.Fold>
}

