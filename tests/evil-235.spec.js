
  describe("some-evil-spec=235", () => {
    it("evil-block-235", () => {
      window.evil_235 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  