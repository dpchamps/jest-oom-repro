
  describe("some-evil-spec=662", () => {
    it("evil-block-662", () => {
      window.evil_662 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  