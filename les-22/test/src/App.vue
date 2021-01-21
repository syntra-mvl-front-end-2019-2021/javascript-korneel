<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Quizr
        </h1>
      </div>
    </div>
  </section>
  <section class="columns is-gapless">
    <aside class="column is-one-quarter">
      <div id="result-container">
        <Result
          v-for="(question, qIndex) in randomQuestions"
          :key="question.question"
          :state="calcState(qIndex)"
          :index="qIndex"
        />
      </div>
      <div id="total-container">
        <span id="total-correct">{{ score }}</span>/10
      </div>
    </aside>
    <main class="column">
      <div id="question-container">
        <div
          id="question"
          data-index="5"
        >
          <span v-if="index < randomQuestions.length">{{ randomQuestions[index].question }}</span>
          <span v-else>Your score is {{ score }}, try again?</span>
        </div>
        <div id="answer-container">
          <a
            id="answer-true"
            class="answer button is-success is-medium"
            @click="trueBtnClicked"
          >
            True
          </a>
          <a
            id="answer-false"
            class="answer button is-danger is-medium"
            @click="falseBtnClicked"
          >
            False
          </a>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Result from '@/components/Result';

export default {
  name: 'App',
  components: { Result },
  data() {
    return {
      randomQuestions: [
        {
          question: 'Linus Torvalds created Linux and Git.',
          correctAnswer: 'True',
        },
        {
          question: 'The programming language "Python" is based off a modified version of "JavaScript".',
          correctAnswer: 'False',
        },
        {
          question: 'The logo for Snapchat is a Bell.',
          correctAnswer: 'False',
        },
        {
          question: 'RAM stands for Random Access Memory.',
          correctAnswer: 'True',
        },
        {
          question: '"HTML" stands for Hypertext Markup Language.',
          correctAnswer: 'True',
        },
        {
          question:
              'In most programming languages, the operator ++ is equivalent to the statement "+= 1".',
          correctAnswer: 'True',
        },
        {
          question: 'The Windows 7 operating system has six main editions.',
          correctAnswer: 'True',
        },
        {
          question: 'The Windows ME operating system was released in the year 2000.',
          correctAnswer: 'True',
        },
        {
          question:
              'The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.',
          correctAnswer: 'False',
        },
        {
          question: 'Linux was first created as an alternative to Windows XP.',
          correctAnswer: 'False',
        },
      ],
      answers: [],
      index: 0,
      score: 0,
    }
  },
  mounted() {
    this.randomizeQuestions();
  },
  methods: {
    calcState(qIndex) {
      if (this.answers[qIndex] === undefined) {
        return 0;
      }
      if (this.answers[qIndex] === true) {
        return 1;
      }
      if (this.answers[qIndex] === false) {
        return 2;
      }
    },
    randomizeQuestions() {
      this.randomQuestions = this.randomQuestions.sort(function () {
        return Math.random() - 0.5;
      });
    },
    resetGame() {
      this.randomizeQuestions();
      this.answers = [];
      this.index = 0;
      this.score = 0;
    },
    answerQuestion(answer) {
      if (answer === this.randomQuestions[this.index].correctAnswer) {
        this.answers[this.index] = true;
        this.score++;
      } else {
        this.answers[this.index] = false;
      }

      console.log(this.answers);

      this.index++;
    },
    trueBtnClicked() {
      if (this.index === this.randomQuestions.length) {
        this.resetGame();
        return;
      }

      this.answerQuestion('True');
    },

    falseBtnClicked() {
      if (this.index === this.randomQuestions.length) {
        return;
      }
      this.answerQuestion('False');
    }
  }
}
</script>

<style>
</style>
