
  describe("some-evil-spec=125", () => {
    it("evil-block-125", () => {
      window.evil_125 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  