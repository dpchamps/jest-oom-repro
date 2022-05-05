
  describe("some-evil-spec=834", () => {
    it("evil-block-834", () => {
      window.evil_834 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  