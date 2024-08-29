import { Center, Text } from '@chakra-ui/layout'
import './App.css'
import { ListItem } from './components/ListItem'

export default function App() {

  return (
    <>
      <Center>
        <Text>Welcome to Ranker</Text>
        <ListItem label={'Shohei'} />
      </Center>
    </>
  )
}
