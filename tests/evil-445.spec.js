
  describe("some-evil-spec=445", () => {
    it("evil-block-445", () => {
      window.evil_445 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  