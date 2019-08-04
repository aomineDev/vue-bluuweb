<template>
  <div>
    <div class="mt-5 d-flex justify-content-around">
      <b-button variant="primary">Texto</b-button>
      <b-button variant="secondary">Texto</b-button>
      <b-button variant="success">Texto</b-button>
      <b-button variant="danger">Texto</b-button>
      <b-button variant="warning">Texto</b-button>
      <b-button variant="info">Texto</b-button>
      <b-button variant="dark">Texto</b-button>
      <b-button variant="light">Texto</b-button>
    </div>
    <div class="mt-5 d-flex justify-content-around">
      <b-button variant="outline-primary">Texto</b-button>
      <b-button variant="outline-secondary">Texto</b-button>
      <b-button variant="outline-success">Texto</b-button>
      <b-button variant="outline-danger">Texto</b-button>
      <b-button variant="outline-warning">Texto</b-button>
      <b-button variant="outline-info">Texto</b-button>
      <b-button variant="outline-dark">Texto</b-button>
      <b-button variant="outline-light">Texto</b-button>
    </div>
    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure ratione quis aperiam dignissimos veniam earum! Modi asperiores sint et? Aperiam molestias, sit eius nam corporis natus officia labore autem?</p>
          <b-button variant="dark" href="#!">Texto</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure ratione quis aperiam dignissimos veniam earum! Modi asperiores sint et? Aperiam molestias, sit eius nam corporis natus officia labore autem?</p>
          <b-button variant="dark" href="#!">Texto</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure ratione quis aperiam dignissimos veniam earum! Modi asperiores sint et? Aperiam molestias, sit eius nam corporis natus officia labore autem?</p>
          <b-button variant="dark" href="#!">Texto</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

