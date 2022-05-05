
  describe("some-evil-spec=429", () => {
    it("evil-block-429", () => {
      window.evil_429 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  