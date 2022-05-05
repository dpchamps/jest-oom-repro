
  describe("some-evil-spec=679", () => {
    it("evil-block-679", () => {
      window.evil_679 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  