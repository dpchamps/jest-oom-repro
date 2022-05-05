
  describe("some-evil-spec=478", () => {
    it("evil-block-478", () => {
      window.evil_478 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  