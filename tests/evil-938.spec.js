
  describe("some-evil-spec=938", () => {
    it("evil-block-938", () => {
      window.evil_938 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  