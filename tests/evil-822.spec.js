
  describe("some-evil-spec=822", () => {
    it("evil-block-822", () => {
      window.evil_822 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  