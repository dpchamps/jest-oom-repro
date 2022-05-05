
  describe("some-evil-spec=92", () => {
    it("evil-block-92", () => {
      window.evil_92 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  