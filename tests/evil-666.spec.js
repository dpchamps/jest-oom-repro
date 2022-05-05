
  describe("some-evil-spec=666", () => {
    it("evil-block-666", () => {
      window.evil_666 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  