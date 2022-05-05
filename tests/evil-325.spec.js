
  describe("some-evil-spec=325", () => {
    it("evil-block-325", () => {
      window.evil_325 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  