
  describe("some-evil-spec=528", () => {
    it("evil-block-528", () => {
      window.evil_528 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  