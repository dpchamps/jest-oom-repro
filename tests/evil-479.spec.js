
  describe("some-evil-spec=479", () => {
    it("evil-block-479", () => {
      window.evil_479 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  