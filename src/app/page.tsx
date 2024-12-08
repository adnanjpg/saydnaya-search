import NameList from './name-list';
import { namesLineSeparated } from './names';

export default function Home() {
    const people = namesLineSeparated.split('\n');
    return (
        <main dir="rtl" className="container mx-auto mt-8">
            <NameList names={people} />
        </main>
    );
}
