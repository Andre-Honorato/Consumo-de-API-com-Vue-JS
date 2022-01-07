<template>
  <Hero fullHeight color="light">
    <Container>
      <Columns centered>
        <Column size="6">
          <Box>
            <ListUsers />
          </Box>
        </Column>
      </Columns>
    </Container>
  </Hero>
</template>

<script>
import Box from './components/elements/Box.vue'
import Hero from './components/layout/Hero.vue'
import Container from './components/layout/Container.vue'
import Columns from './components/layout/Columns.vue'
import Column from './components/layout/Column.vue'
import ListUsers from './components/ListUsers.vue'

export default {
  name: 'App',
  components: {
    Box,
    Hero,
    Container,
    Columns,
    Column,
    ListUsers
  }
}
</script>