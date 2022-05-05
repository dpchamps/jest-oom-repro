
  describe("some-evil-spec=837", () => {
    it("evil-block-837", () => {
      window.evil_837 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  