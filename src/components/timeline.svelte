<script>
  // Timeline data
  const events = [
    {
      date: '2023 Jan',
      title: 'Project Launch',
      description: 'Initial release of the product'
    },
    {
      date: '2023 Mar',
      title: 'First Milestone',
      description: 'Reached 1000 users'
    },
    {
      date: '2023 Jun',
      title: 'Major Update',
      description: 'Released version 2.0'
    },
    {
      date: '2023 Sep',
      title: 'Partnership',
      description: 'Strategic alliance formed'
    },
    {
      date: '2023 Dec',
      title: 'Award',
      description: 'Won industry recognition'
    }
  ];


</script>

<div class="timeline-container">
  <div class="timeline-scroll">
    <div class="timeline">
      {#each events as event, i}
        <div class="timeline-card">
          <!-- <div class="dot"></div> -->
          <div class="date">{event.date}</div>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .timeline-container {
    width: 100%;
    padding: 20px 0;
  }

  .timeline-scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 20px 0;
  }

  .timeline {
    display: flex;
    gap: 2rem;
    padding: 0 2rem;
    min-width: max-content;
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    top: 2.5rem;
    left: 2rem;
    right: 2rem;
    height: 2px;
    background: var(--black);
    z-index: 0;
  }

  .timeline-card {
    position: relative;
    background: var(--black);
    padding: 1.5rem;
    border-radius: 0.5rem;
    width: 250px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .dot {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #3b82f6;
    border-radius: 50%;
    border: 4px solid var(--border);
  }

  .date {
    font-size: 0.875rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--tertiary)
  }

  p {
    color: var(--white);
    font-size: 0.875rem;
  }

  /* For Webkit browsers */
  .timeline-scroll::-webkit-scrollbar {
    height: 8px;
  }

  .timeline-scroll::-webkit-scrollbar-track {
    background: var(--white);
    border-radius: 4px;
  }

  .timeline-scroll::-webkit-scrollbar-thumb {
    background: var(--black);
    border-radius: 4px;
  }

  .timeline-scroll::-webkit-scrollbar-thumb:hover {
    /* background:; */
  }
</style>
