
  describe("some-evil-spec=541", () => {
    it("evil-block-541", () => {
      window.evil_541 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  