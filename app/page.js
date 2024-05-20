import Chat from './components/chat/chat';

export default function Home() {
  return (
    <main>
      <div className='container-md mb-3'>
        <h1>Home</h1>
      </div>

      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </main>
  );
}
