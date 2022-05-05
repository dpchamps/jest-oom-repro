
  describe("some-evil-spec=362", () => {
    it("evil-block-362", () => {
      window.evil_362 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  