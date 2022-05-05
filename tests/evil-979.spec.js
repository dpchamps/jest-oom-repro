
  describe("some-evil-spec=979", () => {
    it("evil-block-979", () => {
      window.evil_979 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  