
  describe("some-evil-spec=861", () => {
    it("evil-block-861", () => {
      window.evil_861 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  