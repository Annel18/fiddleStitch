import ToolBox from './components/ToolBox'
// import Tabs from './components/Tabs'
import StitchesCollection from './components/StitchesCollection'
import Workspace from './components/Workspace'
import OrganiserBox from './components/OrganiserBox'


function App() {


    return (
        <>
            <header>
                <ToolBox />
                {/* <Tabs /> */}
            </header>
            <main>
                <StitchesCollection />
                <Workspace />
                <OrganiserBox />
            </main>
            <footer>

            </footer>
        </>
    )
}

export default App
