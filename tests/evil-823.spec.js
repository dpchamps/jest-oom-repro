
  describe("some-evil-spec=823", () => {
    it("evil-block-823", () => {
      window.evil_823 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  