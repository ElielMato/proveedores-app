import React from 'react';
import backgroundImage from '../../assets/img/home_provider.jpg';

export const Home = () => {
    return (
        <section>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="container mx-auto h-full flex items-center justify-between">
                        <div className="text-white w-[500px]">
                            <h1 className="text-4xl font-bold mb-4">Bienvenido a Provider App</h1>
                            <p className="mb-4">
                                Provider App, es un sitio donde podras registrar tu empresa y proveer o comprar productos para tu negocio.
                            </p>
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
                                Aprende más
                            </button>
                        </div>
                        <div className='mx-40'>
                            <img src={require('../../assets/img/logo.png')} alt="Logo" width={250} className="rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
