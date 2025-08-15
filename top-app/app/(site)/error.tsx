'use client';

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <div>
            <h2>Что-то пошло не так! пидор</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Попробовать снова</button>
        </div>
    );
}