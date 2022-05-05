
  describe("some-evil-spec=626", () => {
    it("evil-block-626", () => {
      window.evil_626 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  