import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Info(props){
    return <div className="row center" style={{ padding: '100px 20px', textAlign: 'center'}}>
                <div className="col col-span-3">
                <svg style={{width:100,height:100, display: 'block', margin: '60px auto'}} viewBox="0 0 24 24">
                    <path fill="red" d="M11.5,0.5C12,0.75 13,2.4 13,3.5C13,4.6 12.33,5 11.5,5C10.67,5 10,4.85 10,3.75C10,2.65 11,2 11.5,0.5M18.5,9C21,9 23,11 23,13.5C23,15.06 22.21,16.43 21,17.24V23H12L3,23V17.24C1.79,16.43 1,15.06 1,13.5C1,11 3,9 5.5,9H10V6H13V9H18.5M12,16A2.5,2.5 0 0,0 14.5,13.5H16A2.5,2.5 0 0,0 18.5,16A2.5,2.5 0 0,0 21,13.5A2.5,2.5 0 0,0 18.5,11H5.5A2.5,2.5 0 0,0 3,13.5A2.5,2.5 0 0,0 5.5,16A2.5,2.5 0 0,0 8,13.5H9.5A2.5,2.5 0 0,0 12,16Z" />
                </svg>
                    <p>Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature</p>
                    <Link to='/profile' className={'isBtn'}>Oh cool</Link>
                </div>
                <div className="col col-span-3">
                <svg style={{width:100,height:100, display: 'block', margin: '60px auto'}} viewBox="0 0 24 24">
                    <path fill="purple" d="M21,21V17C21,15.89 20.1,15 19,15H18V12C18,10.89 17.1,10 16,10H13V8H11V10H8C6.89,10 6,10.89 6,12V15H5C3.89,15 3,15.89 3,17V21H1V23H23V21M12,7A2,2 0 0,0 14,5C14,4.62 13.9,4.27 13.71,3.97L12,1L10.28,3.97C10.1,4.27 10,4.62 10,5A2,2 0 0,0 12,7Z" />
                </svg>
                    <p>Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature</p>
                    <Link to='/profile' className={'isBtn'}>Oh cool</Link>
                </div>
                <div className="col col-span-3">
                <svg style={{width:100,height:100, display: 'block', margin: '60px auto'}} viewBox="0 0 24 24">
                    <path fill="chocolate" d="M12,1.5A2.5,2.5 0 0,1 14.5,4A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 9.5,4A2.5,2.5 0 0,1 12,1.5M15.87,5C18,5 20,7 20,9C22.7,9 22.7,13 20,13H4C1.3,13 1.3,9 4,9C4,7 6,5 8.13,5C8.57,6.73 10.14,8 12,8C13.86,8 15.43,6.73 15.87,5M5,15H8L9,22H7L5,15M10,15H14L13,22H11L10,15M16,15H19L17,22H15L16,15Z" />
                </svg>
                    <p>Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature</p>
                    <Link to='/profile' className={'isBtn'}>Oh cool</Link>

                </div>
        </div>
        
}