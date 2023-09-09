import Login from "@/app/components/Login";
import './globals.css'

export default async function Home() {

    return (
        <main className='max-w-4xl mx-auto mt-4 h-full'>
            <div>
                <Login />
            </div>
        </main>
    );
}
